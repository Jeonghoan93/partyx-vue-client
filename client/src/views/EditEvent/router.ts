import EditEvent from "./EditEvent.vue";

const EditEventRouter = [
  {
    path: "/editEvent/:id",
    name: "EditEvent",
    component: EditEvent,
    props: true,
  },
];

export default EditEventRouter;
