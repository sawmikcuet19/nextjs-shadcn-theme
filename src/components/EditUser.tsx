"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
  FieldDescription,
} from "@/components/ui/field";

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
  username: z.string().min(3, "Min 3 characters").max(50, "Max 50 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Min 10 characters").max(15, "Max 15 characters"),
  location: z.string().min(3, "Min 3 characters"),
  role: z.enum(["admin", "user"]),
});

type FormValues = z.infer<typeof formSchema>;

const EditUser = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "JohnDoe",
      email: "jd@gmail.com",
      phone: "01700000000",
      location: "Dhaka",
      role: "admin",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <SheetContent className="overflow-y-auto p-6 sm:p-8 max-w-lg mx-auto">
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>Update the user’s information below</SheetDescription>
      </SheetHeader>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
        <FieldGroup>
          <FieldDescription>Please fill out the form fields to update the user.</FieldDescription>

          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Username</FieldLabel>
                <Input {...field} aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>
                <Input {...field} placeholder="email@example.com" aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Phone</FieldLabel>
                <Input {...field} aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Location</FieldLabel>
                <Input {...field} aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          
<Controller
  name="role"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel>Role</FieldLabel>
      <Select value={field.value} onValueChange={field.onChange}>
        <SelectTrigger className="w-full border rounded px-3 py-2">
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
        </SelectContent>
      </Select>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
        </FieldGroup>

        <div className="flex gap-3">

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </SheetContent>
  );
};

export default EditUser;