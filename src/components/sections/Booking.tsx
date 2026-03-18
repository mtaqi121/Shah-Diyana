import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertReservationSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Extend schema for frontend
const formSchema = insertReservationSchema.extend({
  name: z.string().min(3, "Name is required and must be at least 3 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Phone number is invalid"),
  location: z.string().min(1, "Location is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  seats: z.coerce
    .number()
    .min(1, "Must be at least 1 person")
    .max(500, "For events larger than 500, please call us directly"),
});

type FormValues = z.infer<typeof formSchema>;

export function Booking() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      seats: 200,
      date: "",
      time: "",
      specialRequest: "",
    },
  });

  function onSubmit(data: FormValues) {
    const phoneNumber = "923043635628";

    const message = encodeURIComponent(
      `🍽 *New Booking Request*\n\n` +
        `👤 Name: ${data.name}\n` +
        `📧 Email: ${data.email}\n` +
        `📞 Phone: ${data.phone}\n` +
        `👥 Persons: ${data.seats}\n` +
        `📅 Date: ${data.date}\n` +
        `⏰ Time: ${data.time}\n` +
        `📝 Special Request: ${data.specialRequest || "None"}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  }

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

          {/* Left Side */}
          <div className="hidden lg:block lg:col-span-2 bg-primary/5 p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-white mb-4">Booking</h3>
              <p className="text-white/60">
                Planning an event? Our catering experts will tailor menus to
                your celebration and deliver exceptional service to your venue.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-white text-lg">Opening Hours</p>
                <p className="text-white/50 text-sm">
                  Mon - Sun: 12:00 PM - 12:00 AM
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <p className="text-white text-lg">Contact</p>
                <p className="text-primary text-sm font-semibold">
                  0304 3635628
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-xs">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-xs">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0300 1234567"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-white text-xs">
                            Location
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your location (e.g., Gulshan-e-Iqbal)"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email + Persons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-white text-xs">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="seats"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-xs">
                            Persons
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-xs">
                            Date
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-xs">
                            Time
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              {...field}
                              className="bg-background/50 border-white/10 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Special Request */}
                  <FormField
                    control={form.control}
                    name="specialRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-xs">
                          Special Request
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any dietary requirements or special occasion?"
                            className="bg-background/50 border-white/10 text-white h-24"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-white hover:text-black transition-all py-6 uppercase"
                  >
                    Confirm Booking
                  </Button>

                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}