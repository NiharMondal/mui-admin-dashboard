import { Form, FormikProvider, useFormik } from "formik";
// material
import {
  Box,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
} from "@mui/material";
import { CustomBox } from "../CustomBox";

// ----------------------------------------------------------------------

const tasks = [
  "Create FireStone Logo",
  "Add SCSS and JS files if required",
  "Stakeholder Meeting",
  "Scoping & Estimations",
  "Sprint Showcase",
];

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={task}
            checked={checked}
            {...other}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: "text.disabled",
                textDecoration: "line-through",
              }),
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}


const Task = () => {
  

  const formik = useFormik({
    initialValues: {
      checked: [tasks[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <CustomBox sx={{mt:4}}>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {tasks.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </CustomBox>
  );
}
export default Task;