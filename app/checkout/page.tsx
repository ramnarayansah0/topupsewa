"use client"
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Uploadq from "../component/upload";
import Form from '../component/Form';
import DataTable from '../component/DataTable';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid gap-8">
        <Form />
        <div>
          <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
          <DataTable />
        </div>
      </div>
    </div>
  );
}
