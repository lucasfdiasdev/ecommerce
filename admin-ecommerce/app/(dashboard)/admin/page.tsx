"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBrazilianRealSign,
} from "react-icons/fa6";

import { Column } from "@ant-design/plots";

import { orders } from "@/lib/data";
import { OrderClient } from "@/components/home/recent-orders/client";
import { OrderColumn } from "@/components/home/recent-orders/columns";

const HomePage = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Fev",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Abr",
      sales: 145,
    },
    {
      type: "Mai",
      sales: 136,
    },
    {
      type: "Jun",
      sales: 233,
    },
    {
      type: "Jul",
      sales: 456,
    },
    {
      type: "Ago",
      sales: 856,
    },
    {
      type: "Set",
      sales: 631,
    },
    {
      type: "Out",
      sales: 963,
    },
    {
      type: "Nov",
      sales: 896,
    },
    {
      type: "Dez",
      sales: 1232,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }: any) => {
      return "#ffd333";
    },
    label: {
      position: "bottom",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Mes",
      },
      sales: {
        alias: "Receita",
      },
    },
  };

  const formattedOrders: OrderColumn[] = orders.map((item: any) => ({
    id: item.id,
    status: item.status,
    costumer: item.costumer,
    createdAt: item.createdAt,
    totalPrice: item.totalPrice,
  }));

  return (
    <>
      <h3 className="text-xl md:text-3xl font-bold mb-4">Dashboard</h3>
      <div className="flex items-center justify-between gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm text-muted-foreground font-normal">
              <span>Total de vendas</span>
              <FaBrazilianRealSign />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <h6 className="text-xl md:text-2xl font-bold">R$ 1000</h6>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 justify-end text-xs">
                <FaArrowTrendUp className="text-green-600" />
                <span className="text-green-600 font-semibold">34.4%</span>
              </div>
              <span className="flex-nowrap text-xs text-muted-foreground font-light">
                comparado a abril, 2023
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm text-muted-foreground font-normal">
              <span>Total de vendas</span>
              <FaBrazilianRealSign />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <h6 className="text-xl md:text-2xl font-bold">R$ 1000</h6>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 justify-end text-xs">
                <FaArrowTrendUp className="text-green-600" />
                <span className="text-green-600 font-semibold">34.4%</span>
              </div>
              <span className="flex-nowrap text-xs text-muted-foreground font-light">
                comparado a abril, 2023
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm text-muted-foreground font-normal">
              <span>Total de vendas</span>
              <FaBrazilianRealSign />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <h6 className="text-xl md:text-2xl font-bold">R$ 1000</h6>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 justify-end text-xs">
                <FaArrowTrendDown className="text-red-600" />
                <span className="text-red-600 font-semibold">3.4%</span>
              </div>
              <span className="flex-nowrap text-xs text-muted-foreground font-light">
                comparado a abril, 2023
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* income statics */}
      <div className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm text-muted-foreground font-normal">
              <span>Receita Static</span>
              <FaBrazilianRealSign />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Column {...config} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              <span>Recent Orders</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <OrderClient data={formattedOrders} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
