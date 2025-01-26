PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`price` integer NOT NULL,
	`category` text DEFAULT 'others' NOT NULL,
	`has_coupon` integer DEFAULT 0 NOT NULL,
	`is_active` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT '"2025-01-26T17:09:13.412Z"' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_items`("id", "code", "name", "description", "price", "category", "has_coupon", "is_active", "created_at") SELECT "id", "code", "name", "description", "price", "category", "has_coupon", "is_active", "created_at" FROM `items`;--> statement-breakpoint
DROP TABLE `items`;--> statement-breakpoint
ALTER TABLE `__new_items` RENAME TO `items`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `items_code_unique` ON `items` (`code`);--> statement-breakpoint
CREATE TABLE `__new_coupons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`is_active` integer DEFAULT 1 NOT NULL,
	`used_by_id` integer,
	`created_by_id` integer NOT NULL,
	`created_at` integer DEFAULT '"2025-01-26T17:09:13.413Z"' NOT NULL,
	FOREIGN KEY (`used_by_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_coupons`("id", "code", "name", "is_active", "used_by_id", "created_by_id", "created_at") SELECT "id", "code", "name", "is_active", "used_by_id", "created_by_id", "created_at" FROM `coupons`;--> statement-breakpoint
DROP TABLE `coupons`;--> statement-breakpoint
ALTER TABLE `__new_coupons` RENAME TO `coupons`;--> statement-breakpoint
CREATE UNIQUE INDEX `coupons_code_unique` ON `coupons` (`code`);--> statement-breakpoint
CREATE TABLE `__new_order_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_id` integer NOT NULL,
	`item_id` integer NOT NULL,
	`quantity` integer NOT NULL,
	`price` integer NOT NULL,
	`created_at` integer DEFAULT '"2025-01-26T17:09:13.413Z"' NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_order_items`("id", "order_id", "item_id", "quantity", "price", "created_at") SELECT "id", "order_id", "item_id", "quantity", "price", "created_at" FROM `order_items`;--> statement-breakpoint
DROP TABLE `order_items`;--> statement-breakpoint
ALTER TABLE `__new_order_items` RENAME TO `order_items`;--> statement-breakpoint
CREATE TABLE `__new_orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`coupon_id` integer,
	`status` text DEFAULT 'pending' NOT NULL,
	`total` integer NOT NULL,
	`sub_total` integer NOT NULL,
	`tax` integer NOT NULL,
	`created_at` integer DEFAULT '"2025-01-26T17:09:13.413Z"' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`coupon_id`) REFERENCES `coupons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_orders`("id", "user_id", "coupon_id", "status", "total", "sub_total", "tax", "created_at") SELECT "id", "user_id", "coupon_id", "status", "total", "sub_total", "tax", "created_at" FROM `orders`;--> statement-breakpoint
DROP TABLE `orders`;--> statement-breakpoint
ALTER TABLE `__new_orders` RENAME TO `orders`;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`vrp_id` text,
	`discord_id` text,
	`supabase_id` text,
	`discord_user` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text,
	`avatar` text,
	`created_at` integer DEFAULT '"2025-01-26T17:09:13.412Z"' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "vrp_id", "discord_id", "supabase_id", "discord_user", "name", "email", "password", "avatar", "created_at") SELECT "id", "vrp_id", "discord_id", "supabase_id", "discord_user", "name", "email", "password", "avatar", "created_at" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `users_vrp_id_unique` ON `users` (`vrp_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_discord_id_unique` ON `users` (`discord_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_supabase_id_unique` ON `users` (`supabase_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_discord_user_unique` ON `users` (`discord_user`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);