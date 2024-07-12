import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from "@/components/ui/slider";


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  industryType: z.string().min(6, {
    message: "Select the industry your business is in.",
  }),
  signUpOptional: z.boolean(),
  // loyaltyCard: z.string().min(6, {
  //   message: "Loyalty card number must be at least 6 characters.",
  // }),
  numberOfStores: z.number().min(1, {
    message: "Number of stores must be at least 1.",
  }),
  averageCartSize: z.number().min(10, {
    message: "Average cart size must be at least $10.",
  }),
  averageStoreSize: z.number().min(1, {
    message: "Average store size must be at least 1.",
  }),
});

export function ROIForm({ onSubmit }: { onSubmit: any }) {

  const [cartSize, setCartSize ] = useState(10);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      industryType: "",
      signUpOptional: true,
//      loyaltyCard: "",
      numberOfStores: 100,
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
        <div className="rounded-md border p-4 space-y-8">

        <FormDescription>Calculate the ROI based on your own numbers to make Guest Wi-Fi a revenue generator.</FormDescription>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
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
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="john@datavalet.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Retail Stores">Retail</SelectItem>
                  <SelectItem value="Cafe & Restaurants">Cafes and Restaurants</SelectItem>
                  <SelectItem value="Hotels and Resorts">Hotels and Resorts</SelectItem>
                  <SelectItem value="Airports">Airports</SelectItem>
                  <SelectItem value="Public Venue">Public Venues</SelectItem>
                  <SelectItem value="Stadiums">Stadiums</SelectItem>
                  <SelectItem value="Shopping Malls">Shopping Malls</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the industry your business operates in to get reliable revenue estimates
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> 
        <FormField
          control={form.control}
          name="signUpOptional"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Make Sign ups optional for customers</FormLabel>
              </div>
              <FormDescription>Choose if only customers that agree to share marketing consent are connected to the internet.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
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
              <FormLabel>Average Cart Size: ${cartSize} </FormLabel>
              <FormControl>
              <Slider defaultValue={[50]} max={1000} step={10} 
              onValueChange={(e) => setCartSize(e[0])} 
              onValueCommit={(e) => {field.onChange(e[0]); setCartSize(e[0])}} />

                {/* <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} /> */}
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