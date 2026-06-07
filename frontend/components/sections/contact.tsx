"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Reach Out <span className="text-gradient-orange">Today</span>
      </h2>

      <form className="space-y-5">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-12"
          />

          <Input
            type="email"
            placeholder="Email Address"
            className="h-12"
          />
        </div>

        {/* Subject */}
        <Input
          type="text"
          placeholder="Subject"
          className="h-12"
        />

        {/* Message */}
        <Textarea
          placeholder="Tell us about your project..."
          className="min-h-[180px] resize-none"
        />

        {/* Button */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-medium bg-orange-500 hover:bg-orange-600"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
