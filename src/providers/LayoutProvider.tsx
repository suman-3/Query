"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../public/new.svg"
import Image from "next/image";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isPublicPage = ["/sign-in", "/sign-up"].includes(pathname);
  return (
    <div className="">
      {!isPublicPage && (
        <div className="flex justify-between items-center py-5 px-5 border shadow border-gray-300">
          <h1
            className="text-primary font-semibold cursor-pointer text-xl"
            onClick={() => router.push("/")}
          >
            <b className="text-secondary">QUERY</b>
            {/* <Image src={logo} alt="logo" width={120} height={120} /> */}

          </h1>
          <div className="px-5 flex gap-5 items-center">
            <Button size="sm" onClick={() => router.push("/profile")}>
              Profile
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}

      <div className="my-5 md:p-5 px-3">{children}</div>
    </div>
  );
}

export default LayoutProvider;
