package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.model.entity.Order;

import java.util.List;

public interface OrderDao {
    List<Order> listOrder();
    Order getOrderById(@Param("id") Long id);
    Long deleteOrder(Long id);

    Long saveOrder(Order order);
    Long updateOrder(Order order);
}
