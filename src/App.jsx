import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const API = "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com/customers";

function App() {
  const [customers, setCustomers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchCustomers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const openAdd = () => {
    setEditing(null);
    setName("");
    setEmail("");
    setOpen(true);
  };

  const openEdit = (c) => {
    setEditing(c);
    setName(c.name);
    setEmail(c.email);
    setOpen(true);
  };

  const handleSave = async () => {
    if (!name || !email) {
      alert("Nhập đầy đủ!");
      return;
    }

    if (editing) {
      await fetch(`${API}/${editing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    }

    setOpen(false);
    fetchCustomers();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Xóa?")) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchCustomers();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Customer CRUD
      </Typography>

      <Button variant="contained" onClick={openAdd}>
        Thêm
      </Button>

      <Table sx={{ marginTop: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.id}</TableCell>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>
                <Button onClick={() => openEdit(c)}>Sửa</Button>
                <Button color="error" onClick={() => handleDelete(c.id)}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* DIALOG */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editing ? "Sửa" : "Thêm"} Customer</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            margin="dense"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button variant="contained" onClick={handleSave}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default App;