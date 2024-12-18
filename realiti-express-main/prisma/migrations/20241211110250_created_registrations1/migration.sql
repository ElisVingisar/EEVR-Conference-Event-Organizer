-- CreateTable
CREATE TABLE "about_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "about_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buy_ticket_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Buy Ticket',
    "ticket_url" VARCHAR NOT NULL DEFAULT 'https://fienta.com/realiti-express-first-baltic-xr-conf',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "buy_ticket_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buy_ticket_section_ticket_options" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "price" DECIMAL NOT NULL,
    "is_featured" BOOLEAN DEFAULT false,

    CONSTRAINT "buy_ticket_section_ticket_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buy_ticket_section_ticket_options_included" (
    "_order" INTEGER NOT NULL,
    "_parent_id" VARCHAR NOT NULL,
    "id" VARCHAR NOT NULL,
    "included" VARCHAR NOT NULL,

    CONSTRAINT "buy_ticket_section_ticket_options_included_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buy_ticket_section_ticket_options_not_included" (
    "_order" INTEGER NOT NULL,
    "_parent_id" VARCHAR NOT NULL,
    "id" VARCHAR NOT NULL,
    "not_included" VARCHAR,

    CONSTRAINT "buy_ticket_section_ticket_options_not_included_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Still have some questions?',
    "target_mail" VARCHAR NOT NULL DEFAULT 'eva@eevr.com',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "contact_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cta_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR DEFAULT 'Interested?',
    "description" VARCHAR NOT NULL DEFAULT 'Book your TICKET now for a jam-packed day of presentations, discussions and demos, followed by a day of hands-on workshops, topped off by the all-night gaming marathon, MängudeÖÖ.',
    "button" VARCHAR NOT NULL DEFAULT 'Get Tickets',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "cta_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_tracks_section" (
    "id" SERIAL NOT NULL,
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "event_tracks_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_tracks_section_day1" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "hour_start" TIMESTAMPTZ(3),
    "hour_end" TIMESTAMPTZ(3),
    "title" VARCHAR NOT NULL,
    "location" VARCHAR,

    CONSTRAINT "event_tracks_section_day1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_tracks_section_day2" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "hour_start" TIMESTAMPTZ(3) NOT NULL,
    "hour_end" TIMESTAMPTZ(3) NOT NULL,
    "title" VARCHAR NOT NULL,
    "location" VARCHAR,

    CONSTRAINT "event_tracks_section_day2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features_section" (
    "id" SERIAL NOT NULL,
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "features_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features_section_features" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "title" VARCHAR,

    CONSTRAINT "features_section_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features_section_features_key_topics" (
    "_order" INTEGER NOT NULL,
    "_parent_id" VARCHAR NOT NULL,
    "id" VARCHAR NOT NULL,
    "topic" VARCHAR,

    CONSTRAINT "features_section_features_key_topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "satisfaction_rating" DECIMAL NOT NULL,
    "organization_rating" DECIMAL NOT NULL,
    "future_speakers" VARCHAR,
    "additional_comments" VARCHAR,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "alt" VARCHAR NOT NULL,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR,
    "thumbnail_u_r_l" VARCHAR,
    "filename" VARCHAR,
    "mime_type" VARCHAR,
    "filesize" DECIMAL,
    "width" DECIMAL,
    "height" DECIMAL,
    "focal_x" DECIMAL,
    "focal_y" DECIMAL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Partners',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "partners_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners_section_partners" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "image_id" INTEGER NOT NULL,
    "url" VARCHAR,

    CONSTRAINT "partners_section_partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payload_locked_documents" (
    "id" SERIAL NOT NULL,
    "global_slug" VARCHAR,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payload_locked_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payload_locked_documents_rels" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "parent_id" INTEGER NOT NULL,
    "path" VARCHAR NOT NULL,
    "users_id" INTEGER,
    "media_id" INTEGER,
    "feedback_id" INTEGER,

    CONSTRAINT "payload_locked_documents_rels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payload_migrations" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "batch" DECIMAL,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payload_migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payload_preferences" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR,
    "value" JSONB,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payload_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payload_preferences_rels" (
    "id" SERIAL NOT NULL,
    "order" INTEGER,
    "parent_id" INTEGER NOT NULL,
    "path" VARCHAR NOT NULL,
    "users_id" INTEGER,

    CONSTRAINT "payload_preferences_rels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speakers_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Speakers',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "speakers_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speakers_section_speakers" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "name" VARCHAR,
    "position" VARCHAR,
    "image_id" INTEGER,
    "linkedin_url" VARCHAR,
    "x_url" VARCHAR,
    "is_disclosed" BOOLEAN NOT NULL DEFAULT false,
    "bio" VARCHAR,

    CONSTRAINT "speakers_section_speakers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "updated_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR NOT NULL,
    "reset_password_token" VARCHAR,
    "reset_password_expiration" TIMESTAMPTZ(3),
    "salt" VARCHAR,
    "hash" VARCHAR,
    "login_attempts" DECIMAL DEFAULT 0,
    "lock_until" TIMESTAMPTZ(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitors_info_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Visitors Info',
    "how_to_get_there_title" VARCHAR NOT NULL DEFAULT 'How to get there',
    "how_to_get_there_content" VARCHAR NOT NULL DEFAULT 'Tallinn is well-connected to major European cities, making it easily accessible for international attendees. The city`s efficient public transport system and compact size ensure convenient travel and accommodation options. Tallinn Airport, located just a short drive from the city center, offers direct flights to numerous destinations.',
    "nearby_hotels_title" VARCHAR NOT NULL DEFAULT 'Nearby Hotels to stay in Tallinn',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "visitors_info_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitors_info_section_nearby_hotels_content" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "link" VARCHAR NOT NULL,

    CONSTRAINT "visitors_info_section_nearby_hotels_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "why_tallinn_section" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL DEFAULT 'Why Tallinn',
    "updated_at" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3),

    CONSTRAINT "why_tallinn_section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "why_tallinn_section_reasons" (
    "_order" INTEGER NOT NULL,
    "_parent_id" INTEGER NOT NULL,
    "id" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "text" VARCHAR NOT NULL,

    CONSTRAINT "why_tallinn_section_reasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Speaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registrations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "info" TEXT,
    "talkTitle" TEXT,
    "arrivalDate" TIMESTAMP(3) NOT NULL,
    "departureDate" TIMESTAMP(3) NOT NULL,
    "hotelAccommodation" TEXT,
    "dietaryRestrictions" TEXT,
    "specialRequests" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_order_idx" ON "buy_ticket_section_ticket_options"("_order");

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_parent_id_idx" ON "buy_ticket_section_ticket_options"("_parent_id");

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_included_order_idx" ON "buy_ticket_section_ticket_options_included"("_order");

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_included_parent_id_idx" ON "buy_ticket_section_ticket_options_included"("_parent_id");

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_not_included_order_idx" ON "buy_ticket_section_ticket_options_not_included"("_order");

-- CreateIndex
CREATE INDEX "buy_ticket_section_ticket_options_not_included_parent_id_idx" ON "buy_ticket_section_ticket_options_not_included"("_parent_id");

-- CreateIndex
CREATE INDEX "event_tracks_section_day1_order_idx" ON "event_tracks_section_day1"("_order");

-- CreateIndex
CREATE INDEX "event_tracks_section_day1_parent_id_idx" ON "event_tracks_section_day1"("_parent_id");

-- CreateIndex
CREATE INDEX "event_tracks_section_day2_order_idx" ON "event_tracks_section_day2"("_order");

-- CreateIndex
CREATE INDEX "event_tracks_section_day2_parent_id_idx" ON "event_tracks_section_day2"("_parent_id");

-- CreateIndex
CREATE INDEX "features_section_features_order_idx" ON "features_section_features"("_order");

-- CreateIndex
CREATE INDEX "features_section_features_parent_id_idx" ON "features_section_features"("_parent_id");

-- CreateIndex
CREATE INDEX "features_section_features_key_topics_order_idx" ON "features_section_features_key_topics"("_order");

-- CreateIndex
CREATE INDEX "features_section_features_key_topics_parent_id_idx" ON "features_section_features_key_topics"("_parent_id");

-- CreateIndex
CREATE INDEX "feedback_created_at_idx" ON "feedback"("created_at");

-- CreateIndex
CREATE INDEX "feedback_updated_at_idx" ON "feedback"("updated_at");

-- CreateIndex
CREATE UNIQUE INDEX "media_filename_idx" ON "media"("filename");

-- CreateIndex
CREATE INDEX "media_created_at_idx" ON "media"("created_at");

-- CreateIndex
CREATE INDEX "media_updated_at_idx" ON "media"("updated_at");

-- CreateIndex
CREATE INDEX "partners_section_partners_order_idx" ON "partners_section_partners"("_order");

-- CreateIndex
CREATE INDEX "partners_section_partners_parent_id_idx" ON "partners_section_partners"("_parent_id");

-- CreateIndex
CREATE INDEX "partners_section_partners_image_idx" ON "partners_section_partners"("image_id");

-- CreateIndex
CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents"("created_at");

-- CreateIndex
CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents"("global_slug");

-- CreateIndex
CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents"("updated_at");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels"("order");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels"("parent_id");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels"("path");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_feedback_id_idx" ON "payload_locked_documents_rels"("feedback_id");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels"("media_id");

-- CreateIndex
CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels"("users_id");

-- CreateIndex
CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations"("created_at");

-- CreateIndex
CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations"("updated_at");

-- CreateIndex
CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences"("created_at");

-- CreateIndex
CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences"("key");

-- CreateIndex
CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences"("updated_at");

-- CreateIndex
CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels"("order");

-- CreateIndex
CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels"("parent_id");

-- CreateIndex
CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels"("path");

-- CreateIndex
CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels"("users_id");

-- CreateIndex
CREATE INDEX "speakers_section_speakers_order_idx" ON "speakers_section_speakers"("_order");

-- CreateIndex
CREATE INDEX "speakers_section_speakers_parent_id_idx" ON "speakers_section_speakers"("_parent_id");

-- CreateIndex
CREATE INDEX "speakers_section_speakers_image_idx" ON "speakers_section_speakers"("image_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "users_updated_at_idx" ON "users"("updated_at");

-- CreateIndex
CREATE INDEX "visitors_info_section_nearby_hotels_content_order_idx" ON "visitors_info_section_nearby_hotels_content"("_order");

-- CreateIndex
CREATE INDEX "visitors_info_section_nearby_hotels_content_parent_id_idx" ON "visitors_info_section_nearby_hotels_content"("_parent_id");

-- CreateIndex
CREATE INDEX "why_tallinn_section_reasons_order_idx" ON "why_tallinn_section_reasons"("_order");

-- CreateIndex
CREATE INDEX "why_tallinn_section_reasons_parent_id_idx" ON "why_tallinn_section_reasons"("_parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "registrations_email_key" ON "registrations"("email");

-- AddForeignKey
ALTER TABLE "buy_ticket_section_ticket_options" ADD CONSTRAINT "buy_ticket_section_ticket_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "buy_ticket_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "buy_ticket_section_ticket_options_included" ADD CONSTRAINT "buy_ticket_section_ticket_options_included_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "buy_ticket_section_ticket_options"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "buy_ticket_section_ticket_options_not_included" ADD CONSTRAINT "buy_ticket_section_ticket_options_not_included_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "buy_ticket_section_ticket_options"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event_tracks_section_day1" ADD CONSTRAINT "event_tracks_section_day1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "event_tracks_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event_tracks_section_day2" ADD CONSTRAINT "event_tracks_section_day2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "event_tracks_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "features_section_features" ADD CONSTRAINT "features_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "features_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "features_section_features_key_topics" ADD CONSTRAINT "features_section_features_key_topics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "features_section_features"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "partners_section_partners" ADD CONSTRAINT "partners_section_partners_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "partners_section_partners" ADD CONSTRAINT "partners_section_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "partners_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_feedback_fk" FOREIGN KEY ("feedback_id") REFERENCES "feedback"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_locked_documents"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "speakers_section_speakers" ADD CONSTRAINT "speakers_section_speakers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "speakers_section_speakers" ADD CONSTRAINT "speakers_section_speakers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "speakers_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "visitors_info_section_nearby_hotels_content" ADD CONSTRAINT "visitors_info_section_nearby_hotels_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "visitors_info_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "why_tallinn_section_reasons" ADD CONSTRAINT "why_tallinn_section_reasons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "why_tallinn_section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
