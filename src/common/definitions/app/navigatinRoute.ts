import {NavigationRouteType} from "@/types";
import {route} from "@/common/definitions/app/route";

export const NavigationRoute: NavigationRouteType[] = [
  {href: route.HOME, name: "HOME"},
  {href: route.PROJECTS, name: "Projects"},
  {href: route.SKILLS, name: "Skills"},
  {href: route.RESUME, name: "Resume"},
];
