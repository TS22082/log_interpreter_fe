import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Card, Heading, Link, Table } from "flowbite-qwik";

export default component$(() => {
  return (
    <div class="align-center flex w-full justify-center">
      <div class="w-[1200px]">
        <div class="flex flex-wrap justify-between gap-4 pt-10">
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Info</Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Actions</Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Errors</Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div class="overflow-x-auto pt-10">
          <Table>
            <Table.Head>
              <Table.HeadCell>Type</Table.HeadCell>
              <Table.HeadCell>Trace ID</Table.HeadCell>
              <Table.HeadCell>Message</Table.HeadCell>
              <Table.HeadCell>Time</Table.HeadCell>
              <Table.HeadCell>
                <span class="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body class="divide-y">
              <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell class="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                  INFO
                </Table.Cell>
                <Table.Cell>98767</Table.Cell>
                <Table.Cell>Dashboard page hit</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <Link href="#">View</Link>
                </Table.Cell>
              </Table.Row>
              <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell class="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                  INFO
                </Table.Cell>
                <Table.Cell>98767</Table.Cell>
                <Table.Cell>Settings page hit</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <Link href="#">View</Link>
                </Table.Cell>
              </Table.Row>
              <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell class="font-medium whitespace-nowrap text-gray-900 dark:text-white">
                  ACTION
                </Table.Cell>
                <Table.Cell>123432</Table.Cell>
                <Table.Cell>New article took .0038s</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <Link href="#">View</Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
  meta: [
    {
      name: "Dashboard",
      content: "Dashboard",
    },
  ],
};
