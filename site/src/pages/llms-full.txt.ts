import type { APIRoute } from "astro";
import { pageMarkdown } from "../lib/markdown.ts";

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(pageMarkdown(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
