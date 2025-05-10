'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type FormData = z.infer<typeof formSchema>;

const JoinWaitlistSection = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  // Placeholder for actual submission logic (e.g., to Firebase)
  const onSubmit = async (data: FormData) => {
    console.log('Waitlist form submitted:', data);
    // Here you would typically call a server action or API endpoint
    // For example: await submitToFirebase(data.email);

    toast({
      title: 'You\'re on the list!',
      description: `We've received your email: ${data.email}. We'll notify you about beta access.`,
      variant: 'default', // Ensure this variant matches your toast component setup
    });
    form.reset(); // Reset form after submission
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
