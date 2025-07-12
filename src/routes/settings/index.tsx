import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button, Card, Heading, Input, Table } from "flowbite-qwik";

export default component$(() => {
  return (
    <div class="flex flex-col justify-center gap-2">
      <Form class="mt-10 flex flex-col gap-2">
        <h1 class="text-lg">Project Name:</h1>
        <Input placeholder="Add a project" />
        <div class="flex flex-wrap justify-between gap-2">
          <Card class="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
            <Heading>Free</Heading>
          </Card>
          <Card class="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
            <Heading>$29.99</Heading>
          </Card>
          <Card class="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4">
            <Heading>$79.99</Heading>
          </Card>
        </div>
        <Button>Create Project</Button>
      </Form>

      <h1 class="mt-10 text-lg">Projects Table</h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>Org</Table.HeadCell>
          <Table.HeadCell>Members</Table.HeadCell>
          <Table.HeadCell>Api Keys</Table.HeadCell>
        </Table.Head>

        <Table.Body>
          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell class="font-medium whitespace-nowrap text-gray-900 dark:text-white">
              qwiky
            </Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
});
