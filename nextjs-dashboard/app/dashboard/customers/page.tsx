import { montserrat } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';

export default async function Customers() {
  const customersData = await fetchCustomers();

  return <CustomersTable customers={customersData} />;
}
