import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Open | Best School in Bihar Sharif",
  description: "Admissions are now open for Play Group to Class 12 Science. Apply to Edugen World School, the best school in Bihar Sharif for quality education.",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
