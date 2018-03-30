package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.OrderDao;
import space.qmen.lot.model.dto.OwnerOrderDTO;
import space.qmen.lot.model.entity.Order;
import space.qmen.lot.model.param.ListOrderParam;
import space.qmen.lot.service.IOrderService;

import java.util.List;

@Service
public class OrderServiceImpl implements IOrderService {
    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Order> listOrder(){
        return orderDao.listOrder();
    }

    @Override
    public Order getOrderById(Long id) { return orderDao.getOrderById(id); }

    @Override
    public Long deleteOrder(Long id) {
        return orderDao.deleteOrder(id);
    }

    @Override
    public Long saveOrder(Order order) { return orderDao.saveOrder(order); }

    @Override
    public Long updateOrder(Order order) { return orderDao.updateOrder(order); }

    @Override
    public List<OwnerOrderDTO> listOrderByOwnerId(ListOrderParam listOrderParam){
        return orderDao.listOrderByOwnerId(listOrderParam);
    }
}
