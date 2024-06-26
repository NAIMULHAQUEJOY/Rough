﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using first_task.EF;

#nullable disable

namespace first_task.Migrations
{
    [DbContext(typeof(EF_DataContext))]
    [Migration("20240419113312_UpdateReference")]
    partial class UpdateReference
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("first_task.EF.Order", b =>
                {
                    b.Property<int>("oId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("oId"));

                    b.Property<int>("Productid")
                        .HasColumnType("integer");

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("oId");

                    b.HasIndex("Productid");

                    b.ToTable("order");
                });

            modelBuilder.Entity("first_task.EF.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("brand")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<decimal>("price")
                        .HasColumnType("numeric");

                    b.Property<int>("size")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("product");
                });

            modelBuilder.Entity("first_task.EF.Order", b =>
                {
                    b.HasOne("first_task.EF.Product", "Product")
                        .WithMany()
                        .HasForeignKey("Productid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");
                });
#pragma warning restore 612, 618
        }
    }
}
