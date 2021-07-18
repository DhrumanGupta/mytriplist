﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using mytriplist.WebApi.Data;

namespace mytriplist.WebApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("mytriplist.WebApi.Models.Day", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("DestinationId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("DestinationId");

                    b.ToTable("Day");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Destination", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("ResidenceCost")
                        .HasColumnType("integer");

                    b.Property<string>("ResidenceName")
                        .HasColumnType("text");

                    b.Property<Guid?>("TripListId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("TripListId");

                    b.ToTable("Destination");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Place", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("DayId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Time")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Place");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.TripList", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("StartDate")
                        .HasColumnType("text");

                    b.Property<DateTime>("TimeCreated")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<string>("TripType")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("TripLists");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Day", b =>
                {
                    b.HasOne("mytriplist.WebApi.Models.Destination", null)
                        .WithMany("Days")
                        .HasForeignKey("DestinationId");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Destination", b =>
                {
                    b.HasOne("mytriplist.WebApi.Models.TripList", null)
                        .WithMany("Destinations")
                        .HasForeignKey("TripListId");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Place", b =>
                {
                    b.HasOne("mytriplist.WebApi.Models.Day", null)
                        .WithMany("Places")
                        .HasForeignKey("DayId");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Day", b =>
                {
                    b.Navigation("Places");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.Destination", b =>
                {
                    b.Navigation("Days");
                });

            modelBuilder.Entity("mytriplist.WebApi.Models.TripList", b =>
                {
                    b.Navigation("Destinations");
                });
#pragma warning restore 612, 618
        }
    }
}
