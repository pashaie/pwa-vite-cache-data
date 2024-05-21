import { Workbox } from "workbox-window";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.href.includes("jsonplaceholder"),
  new StaleWhileRevalidate({ cacheName: "api" })
);
