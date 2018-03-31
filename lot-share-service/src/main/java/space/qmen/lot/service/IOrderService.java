package space.qmen.lot.service;


import space.qmen.lot.model.dto.OwnerOrderDTO;
import space.qmen.lot.model.entity.Order;
import space.qmen.lot.model.param.OrderParam;

import java.util.List;

public interface IOrderService {
    List<Order> listOrder();
    Order getOrderById(Long id);
    Long deleteOrder(Long id);

    Long saveOrder(Order order);
    Long updateOrder(Order order);

    // 自定义
    // 业主订单
    List<OwnerOrderDTO> listOrderByOwnerId(OrderParam orderParam);
}
