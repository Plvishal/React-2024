// import React from 'react';
import { useFormik } from 'formik';
import { validateProduct } from './Validation.js';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      qty: '',
      price: '',
    },
    validate: validateProduct,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <tabel >
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>
            </tr>
            <tr>
              <td>Qty</td>
              <td>
                <input
                  type="text"
                  id="qty"
                  name="qty"
                  value={formik.values.qty}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="reset" />
                &nbsp;
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </tabel>
      </form>
    </>
  );
}

export default FormikForm;