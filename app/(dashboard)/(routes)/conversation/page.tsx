"use client";

import axios from "axios";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
import Empty from "@/components/Empty";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import BotAvatar from "@/components/BotAvatar";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
});

const ConversationPage = () => {
  const proModal = useProModal();

  const router = useRouter();
  const [messages, setMessages] = useState<
    OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[]
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage =
        {
          role: "user",
          content: values.prompt,
        };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      // console.log(response.data);

      setMessages((cur) => [...cur, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      {...field}
                      disabled={isLoading}
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      placeholder="How to explain superconductors?"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="col-span-12 lg:col-span-2" disabled={isLoading}>
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt-4">
        {isLoading && (
          <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
            <Loading />
          </div>
        )}
        {messages.length === 0 && !isLoading && (
          <Empty label="No conversation started" />
        )}
        <div className="">
          {messages.map((msg) => {
            return (
              <div
                key={msg.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  msg.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{msg.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
