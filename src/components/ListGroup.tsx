
import Button from "./Button";

interface Props {
  items: string[];
  heading: string;
  onDelete: (item: string) => void;
}

const ListGroup = ({ items, heading, onDelete }: Props) => {

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={`${item}-${index}`}
              className="d-flex justify-content-between list-group-item"
              
            >
              {item}
              <Button color="danger" onClick={() => onDelete(item)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>

      <table className="table table-bordered mt-3">
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{items.length}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ListGroup;
