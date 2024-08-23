import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ideasContext } from "../../context/ideasContext";
import { Context, Idea, Input } from "../../types";
import { unixToDate } from "../../utils/date";

export const IdeaTile = ({ idea }: { idea: Idea }) => {
  const { deleteIdea, updateIdea } = useContext(ideasContext) as Context;

  const { id, title, description } = idea as Idea;

  const { register, watch, handleSubmit } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => updateIdea(id, data);

  const inputDescriptionLength = watch("description", "").length;

  return (
    <article className="bg-white rounded-lg w-5/6 md:4/6 px-4 pb-3 mt-6 md:mt-12">
      <div className="flex justify-between">
        <div className="text-indigo-600 mt-6 text-sm">
          {idea.updated ? "Updated " : "Created "}
          {unixToDate(idea.timestamp)}
        </div>
        <div>
          <button
            className="text-xl text-slate-800 cursor-pointer mt-2 hover:text-slate-600"
            onClick={() => deleteIdea(id)}
          >
            x
          </button>
        </div>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="text-xs text-slate-600 mt-6 ml-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="rounded-lg p-3 bg-slate-200 text-slate-900 focus:border-indigo-500 placeholder-slate-500"
          placeholder="e.g. Idea proposal"
          autoFocus
          {...register("title")}
          defaultValue={title}
        />
        <label
          htmlFor="description"
          className="text-xs text-slate-600 mt-4 ml-2"
        >
          Description
        </label>
        <textarea
          className="rounded-lg bg-slate-200 p-3 resize-none text-slate-900 placeholder-slate-500"
          id="description"
          rows={4}
          cols={26}
          maxLength={140}
          {...register("description")}
          placeholder="Provide a brief description (max 140 characters)"
          defaultValue={description}
        />
        <div className="flex justify-between">
          {inputDescriptionLength >= 110 && (
            <div className="text-sm text-light mt-1">
              {inputDescriptionLength}/140
            </div>
          )}

          {title !== watch("title", "") ||
          description !== watch("description", "") ? (
            <input
              className="rounded-full bg-indigo-800 text-white px-4 py-2 mt-3 ml-auto hover:bg-indigo-700 cursor-pointer"
              type="submit"
              value="Update"
            />
          ) : (
            <div className="py-6 mt-1"></div>
          )}
        </div>
      </form>
    </article>
  );
};
