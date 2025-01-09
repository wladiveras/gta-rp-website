PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`vrp_id` text,
	`discord_id` text,
	`supabase_id` text,
	`discord_user` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text NOT NULL,
	`created_at` integer DEFAULT '"2025-01-09T07:16:32.317Z"' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "vrp_id", "discord_id", "supabase_id", "discord_user", "name", "email", "password", "avatar", "created_at") SELECT "id", "vrp_id", "discord_id", "supabase_id", "discord_user", "name", "email", "password", "avatar", "created_at" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `users_discord_id_unique` ON `users` (`discord_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_supabase_id_unique` ON `users` (`supabase_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_discord_user_unique` ON `users` (`discord_user`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);