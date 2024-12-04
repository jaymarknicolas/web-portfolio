"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(150),
});

const CTA = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="my-16">
      <div className="space-y-12 w-8/12 mb-16">
        <div className="text-wrapper">
          <h1 className="uppercase font-bold text-8xl">
            <span className="text-white">LET’S WORK</span>
            <br />
            <span className="text-[#515153]">TOGETHER</span>
          </h1>
        </div>
      </div>
      <div className="space-y-8 mb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 flex-wrap">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className=" shrink-0 basis-[49%]">
                    <FormLabel className="text-[#6A6B6E] text-xs font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="border-none bg-[#515153] rounded-lg text-white placeholder:text-white font-light text-xs placeholder:text-xs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" shrink-0 basis-[49%]">
                    <FormLabel className="text-[#6A6B6E] text-xs font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your@email.com"
                        {...field}
                        className="border-none bg-[#515153] rounded-lg text-white placeholder:text-white font-light text-xs placeholder:text-xs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className=" shrink-0 basis-full">
                    <FormLabel className="text-[#6A6B6E] text-xs font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="border-none bg-[#515153] rounded-lg text-white placeholder:text-white font-light text-xs placeholder:text-xs h-[145px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full py-6 font-medium text-sm">
              View More
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CTA;
