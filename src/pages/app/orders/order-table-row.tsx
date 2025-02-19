import { Search, ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="w-3 h-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">123456</TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell className="font-medium">R$ 120,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="w-3 h-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="w-3 h-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
