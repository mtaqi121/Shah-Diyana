import { useMutation } from "@tanstack/react-query";
import { api, buildUrl, type ReservationInput, type ReservationResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateReservation() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ReservationInput) => {
      // Validate before sending
      const validated = api.reservations.create.input.parse(data);
      
      const res = await fetch(api.reservations.create.path, {
        method: api.reservations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.reservations.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit reservation");
      }

      return api.reservations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed",
        description: "We look forward to hosting your beautiful celebration!",
        duration: 5000,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  });
}
