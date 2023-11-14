import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styles from "./SnacksListNew.module.css";

const Snacks = ({ snacks, handleComplete, handleEdit, handleDelete }) => {
  return (
    <>
      <div>
        <ul className={styles.snack}>
          {snacks.map((snack) => (
            <React.Fragment key={snack.id}>
              <li
                className={
                  snack.completed ? styles.completedSnack : styles.snackItem
                }
              >
                {snack.title}
              </li>
              <span className={styles.buttons}>
                <button
                  className={styles.buttonComplete}
                  onClick={() => handleComplete(snack)}
                >
                  <i className="far fa-check-circle fa-xs"></i>
                </button>

                <button
                  className={styles.buttonEdit}
                  onClick={() => handleEdit(snack)}
                  disabled={snack.completed}
                >
                  <i className="far fa-pen-to-square fa-xs"></i>
                </button>

                <button
                  className={styles.buttonDelete}
                  onClick={() => handleDelete(snack.id)}
                >
                  <i className="fas fa-trash fa-xs"></i>
                </button>
              </span>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

// Define the expected prop types for the Snacks component
Snacks.propTypes = {
  snacks: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Snacks;
