/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		user: import("lucia").User | null;
		session: import("lucia").Session | null;
	}
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
  }
