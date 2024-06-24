import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  loyaltyCard: z.string().min(6, {
    message: "Loyalty card number must be at least 6 characters.",
  }),
  numberOfStores: z.number().min(1, {
    message: "Number of stores must be at least 1.",
  }),
  averageCartSize: z.number().min(1, {
    message: "Average cart size must be at least 1.",
  }),
  averageStoreSize: z.number().min(1, {
    message: "Average store size must be at least 1.",
  }),
});

export function ROIForm({ onSubmit }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      loyaltyCard: "",
      numberOfStores: 800,
      averageCartSize: 100,
      averageStoreSize: 5000,
    },
  });

  function onSubmitForm(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loyaltyCard"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Loyalty Card Number</FormLabel>
              <FormControl>
                <Input placeholder="123456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfStores"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Stores</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="averageCartSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Cart Size</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="averageStoreSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Store Size (sq. ft)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate ROI</Button>
      </form>
    </Form>
  );
}