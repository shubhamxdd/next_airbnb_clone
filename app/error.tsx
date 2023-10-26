"use client";

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const Error = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <EmptyState title="An error occured" subtitle="Something went wrong" />
  );
};

export default Error;
