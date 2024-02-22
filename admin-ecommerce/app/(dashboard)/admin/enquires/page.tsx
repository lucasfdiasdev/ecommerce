import { enquires } from "@/lib/data";

import { EnquiresClient } from "@/components/enquires/client";
import { EnquiresColumn } from "@/components/enquires/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnquiresPage = () => {
  const formattedEnquires: EnquiresColumn[] = enquires.map((item: any) => ({
    id: item.id,
    status: item.status,
    costumer: item.costumer,
    createdAt: item.createdAt,
    totalPrice: item.totalPrice,
  }));

  return (
    <>
      <h3 className="text-xl md:text-3xl font-bold mb-4">Perguntas</h3>
      <div className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              <span>Perguntas Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EnquiresClient data={formattedEnquires} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EnquiresPage;
