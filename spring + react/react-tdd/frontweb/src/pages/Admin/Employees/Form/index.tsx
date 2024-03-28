import { useHistory } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { Department } from 'types/department';
import { Controller, useForm } from 'react-hook-form';
import { Employee } from 'types/employee';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import Select from 'react-select';

const Form = () => {
  const history = useHistory();
  const [selectDepartments, setSelectDepartments] = useState<Department[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Employee>();

  useEffect(() => {
    requestBackend({ url: '/departments', withCredentials: true }).then(
      (response) => {
        setSelectDepartments(response.data);
      }
    );
  }, []);

  const onSubmit = (formData: Employee) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/employees',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Cadastrado com sucesso');
        history.push('/admin/employees');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar');
      });
  };

  const handleCancel = () => {
    history.push('/admin/employees');
  };

  return (
    <div className="employee-crud-container">
      <div className="base-card employee-crud-form-card">
        <h1 className="employee-crud-form-title">INFORME OS DADOS</h1>

        <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
          <div className="row employee-crud-inputs-container">
            <div className="col employee-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <label htmlFor="name">Nome</label>
                <input
                  {...register('name', { required: 'Campo obrigatório' })}
                  id="name"
                  type="text"
                  data-testid="name"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <label htmlFor="name">Email</label>
                <input
                  {...register('email', {
                    required: 'Campo obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                  id="email"
                  type="text"
                  data-testid="email"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback d-block">
                  {errors.email?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <label htmlFor="department">Departamento</label>
                <Controller
                  name="department"
                  rules={{ required: 'Campo obrigatório' }}
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectDepartments}
                      classNamePrefix="product-crud-select"
                      className={`form-control base-input ${
                        errors.name ? 'is-invalid' : ''
                      }`}
                      getOptionLabel={(department: Department) =>
                        department.name
                      }
                      getOptionValue={(department: Department) =>
                        String(department.id)
                      }
                      inputId="department"
                    />
                  )}
                />
                <div className="invalid-feedback d-block">
                  {(errors.department as any)?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="employee-crud-buttons-container">
            <button
              className="btn btn-outline-danger employee-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary employee-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
