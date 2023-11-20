import { z } from "zod";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  item: z
    .string()
    .min(1, { message: "Input should be at least 1 character." })
    .max(55),
});

type ItemFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ItemFormData) => void;
}
const Form = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItemFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
        
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Add to list
        </label>
        <input
          {...register("item")}
          id="item"
          type="text"
          className="form-control"
        />
        {errors.item && <p className="text-danger">{errors.item.message}</p>}
      </div>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
