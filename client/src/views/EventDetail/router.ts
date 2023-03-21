import EventDetail from "./EventDetail.vue";

const EventDetailRouter = [
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
    props: true,
  },
];

export default EventDetailRouter;
