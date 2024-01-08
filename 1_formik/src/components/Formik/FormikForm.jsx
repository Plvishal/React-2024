// import React from 'react';
import { useFormik } from 'formik';
import { validateProduct } from './Validation.js';
import { useState } from 'react';

function FormikForm() {
  const [formData, setFormData] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      qty: '',
      price: '',
    },
    validate: validateProduct,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      setFormData(JSON.stringify(values));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <tabel>
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
              <td>
                {formik.touched.id && formik.errors.id ? (
                  <span style={{ color: 'red' }}>{formik.errors.id}</span>
                ) : null}
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
              {formik.touched.name && formik.errors.name ? (
                <span>{formik.errors.name}</span>
              ) : null}
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
              <tb>
                {formik.touched.qty && formik.errors.qty ? (
                  <span>{formik.errors.qty}</span>
                ) : null}
              </tb>
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
              <td>
                {formik.touched.price && formik.errors.price ? (
                  <span>{formik.errors.price}</span>
                ) : null}
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
      <div>
        <ul>
          {formData}
        </ul>
      </div>
    </>
  );
}

export default FormikForm;
