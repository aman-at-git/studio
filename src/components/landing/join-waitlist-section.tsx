'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type FormData = z.infer<typeof formSchema>;

const FIRESTORE_TIMEOUT_MS = 15000; // 15 seconds

const JoinWaitlistSection = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const firestoreWritePromise = addDoc(collection(db, 'waitlist'), {
        email: data.email,
        submittedAt: serverTimestamp(),
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Firestore operation timed out')), FIRESTORE_TIMEOUT_MS)
      );

      // Race the Firestore operation against the timeout
      await Promise.race([firestoreWritePromise, timeoutPromise]);

      toast({
        title: 'You\'re on the list!',
        description: `We've received your email: ${data.email}. We'll notify you about beta access.`,
        variant: 'default',
      });
      form.reset();
    } catch (error: unknown) {
      console.error('Error adding document to waitlist or timed out: ', error);

      let title = 'Submission Failed';
      let description = 'There was an error submitting your email. Please try again later.';

      if (error instanceof Error && error.message.includes('Firestore operation timed out')) {
        description = 'Submission timed out. Please check your internet connection and try again. If the issue persists, Firebase configuration might need review.';
      } else if (typeof error === 'object' && error !== null && 'code' in error) {
        // Handle Firebase specific errors
        const firebaseError = error as { code: string; message: string };
        if (firebaseError.code === 'permission-denied') {
          description = 'Submission failed: Permission denied. This might be due to Firestore security rules. Please contact support.';
        } else {
          description = `An error occurred: ${firebaseError.message}. Please try again.`;
        }
      }
      // For other unknown errors, the default message is used.

      toast({
        title: title,
        description: description,
        variant: 'destructive',
      });
    }
    // react-hook-form will automatically set form.formState.isSubmitting to false
    // when the promise returned by onSubmit resolves or rejects.
  };

  return (
    <section id="join-waitlist-form" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Join the <span className="text-primary">Beta Waitlist</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be among the first to experience JobPilot AI. Sign up now for early access and updates.
          </p>
        </div>
        <div className="mt-12 max-w-md mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email" className="sr-only">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                        className="py-6 text-base"
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full py-6 text-lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Submitting...' : 'Get Early Access'}
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-xs text-center text-muted-foreground">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlistSection;
