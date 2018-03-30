package space.qmen.lot.service;

import space.qmen.lot.model.entity.Bill;
import space.qmen.lot.model.param.GetWalletParam;

import java.util.List;

public interface IBillService {
    List<Bill> listBill();
    Bill getBillById(Long id);
    Long deleteBill(Long id);

    Long saveBill(Bill bill);
    Long updateBill(Bill bill);

    Double getWalletTotal(GetWalletParam getWalletParam);
}
