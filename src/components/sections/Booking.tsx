import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateReservation } from "@/hooks/use-reservations";
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

// Extend schema for frontend to coerce numbers from string inputs
const formSchema = insertReservationSchema.extend({
  seats: z.coerce.number().min(1, "Must be at least 1 seat").max(500, "For events larger than 500, please call us directly"),
});

type FormValues = z.infer<typeof formSchema>;

export function Booking() {
  const { mutate: createReservation, isPending } = useCreateReservation();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      seats: 2,
      date: "",
      time: "",
      specialRequest: "",
    },
  });

  function onSubmit(data: FormValues) {
    createReservation(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Dark elegant background with texture */}
      <div className="absolute inset-0 z-0">
        {/* elegant dark culinary background texture abstract */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
          alt="Dark Background"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-card/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Decorative Left Side */}
          <div className="hidden lg:block lg:col-span-2 relative bg-primary/5 p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-4xl font-bold text-white mb-4">Book Your <br/><span className="text-primary italic">Table</span></h3>
              <p className="text-white/60 font-light">Join us for an exquisite dining experience. Secure your spot and let us take care of the rest.</p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-white font-display text-lg">Opening Hours</p>
                <p className="text-white/50 text-sm">Mon - Sun: 12:00 PM - 12:00 AM</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-white font-display text-lg">Contact</p>
                <p className="text-primary text-sm font-semibold">0304 3635628</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="0300 1234567" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="seats"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Seats</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none [color-scheme:dark]" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none [color-scheme:dark]" />
                          </FormControl>
                          <FormMessage className="text-destructive/80 text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specialRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Special Requests (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any dietary requirements or special occasions?" 
                            className="bg-background/50 border-white/10 focus-visible:ring-primary/50 text-white rounded-none resize-none h-24"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive/80 text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-none bg-primary text-primary-foreground hover:bg-white hover:text-black transition-all duration-300 font-semibold py-6 uppercase tracking-widest text-sm"
                    disabled={isPending}
                  >
                    {isPending ? "Confirming..." : "Confirm Reservation"}
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
