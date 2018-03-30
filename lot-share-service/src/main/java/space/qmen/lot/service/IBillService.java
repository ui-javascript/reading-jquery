package space.qmen.lot.service;

import space.qmen.lot.model.entity.Bill;

import java.util.List;

public interface IBillService {
    List<Bill> listBill();
    Bill getBillById(Long id);
    Long deleteBill(Long id);

    Long saveBill(Bill bill);
    Long updateBill(Bill bill);
}
