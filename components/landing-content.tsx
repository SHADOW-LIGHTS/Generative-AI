"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Mark",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "CEO",
    description:
      "As a CEO, I need to create engaging and innovative content for my business. That's why I use Genius, the best AI tool for generating images, chat, music, video, and code.",
  },
  {
    name: "Jeff",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    title: "Software Engineer",
    description:
      "Genius is a game-changer for software engineers. It can generate any kind of content with AI, from images to code. It's fast, easy, and fun to use. I love it!",
  },
  {
    name: "Roberta Casas",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    title: "CFO",
    description:
      "Whether I need a financial report, a budget forecast, presentation, or a spreadsheet, Genius can do it all. I highly recommend it to anyone who wants to optimize their financial performance.",
  },
  {
    name: "Jese Leos",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    title: "Designer",
    description:
      "As a designer, I need to create beautiful and original content for my projects. Genius helps me unleash my creativity and inspiration by creating stunning content with AI, without any hassle or limitation.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 select-none">
      <h2 className="text-center text-4xl text-black font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-black border-2 border-pink-600  text-white group-hover:bg-black  hover:border-black hover:bg-white hover:text-black"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <Image
                    className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                    width={100}
                    height={100}
                    src={item.avatar}
                    alt="Image Description"
                  />
                  <p className="text-lg pt-2">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
