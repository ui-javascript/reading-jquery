package space.qmen.lot.service;


import space.qmen.lot.model.entity.Order;

import java.util.List;

public interface IOrderService {
    List<Order> listOrder();
    Order getOrderById(Long id);
    Long deleteOrder(Long id);

    Long saveOrder(Order order);
    Long updateOrder(Order order);
}
