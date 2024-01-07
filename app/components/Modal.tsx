"use client";
import { recipeSchema, recipeSchemaType } from "@/Schema/zodValidation";
import { useRecipeStore } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import uniqid from "uniqid";

export const openModal = () => {
  const modalElement = document.getElementById(
    "my_modal_5"
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.showModal();
  }
};

const closeModal = () => {
  const modalElement = document.getElementById(
    "my_modal_5"
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.close();
  }
};

export default function Modal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const recipes = useRecipeStore((state) => state.recipes);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recipeSchemaType>({ resolver: zodResolver(recipeSchema) });

  const onSubmit: SubmitHandler<recipeSchemaType> = (data, event) => {
    event?.preventDefault();
    data.Id = uniqid().toString();

    addRecipe(data);
    console.log(recipes);
    closeModal();
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center mb-4">Add New Recipe</h3>
        {/* modal body */}
        <div className="my-4">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="grid-first-name"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Recipe Name
                </label>
                <input
                  id="grid-first-name"
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Recipe Name"
                  {...register("Name")}
                />

                {errors.Name && (
                  <span className="text-red-500 text-xs italic">
                    {errors.Name.message}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="grid-last-name"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Image Url
                </label>
                <input
                  id="grid-last-name"
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Paste a valid image url"
                  {...register("ImageUrl")}
                />
                {errors.ImageUrl && (
                  <span className="text-red-500 text-xs italic">
                    {errors.ImageUrl.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="grid-first-name"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Price
              </label>
              <input
                id="grid-first-name"
                type="number"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter the Price"
                {...register("Price")}
              />
              {errors.Price && (
                <span className="text-red-500 text-xs italic">
                  {errors.Price.message}
                </span>
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 justify-between">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="grid-state"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Is Popular
                </label>
                <div className="relative">
                  <select
                    id="grid-state"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    {...register("IsPopular")}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  {errors.IsPopular && (
                    <span className="text-red-500 text-xs italic">
                      {errors.IsPopular.message}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="grid-state"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Is Recommended
                </label>
                <div className="relative">
                  <select
                    id="grid-state"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    {...register("IsRecommended")}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  {errors.IsRecommended && (
                    <span className="text-red-500 text-xs italic">
                      {errors.IsRecommended.message}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-action">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>

              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
