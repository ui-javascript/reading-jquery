package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.BillDao;
import space.qmen.lot.model.entity.Bill;
import space.qmen.lot.model.param.GetWalletParam;
import space.qmen.lot.service.IBillService;

import java.util.List;

@Service
public class BillServiceImpl implements IBillService {
    @Autowired
    private BillDao billDao;

    @Override
    public List<Bill> listBill(){
        return billDao.listBill();
    }

    @Override
    public Bill getBillById(Long id) { return billDao.getBillById(id); }

    @Override
    public Long deleteBill(Long id) {
        return billDao.deleteBill(id);
    }

    @Override
    public Long saveBill(Bill bill) { return billDao.saveBill(bill); }

    @Override
    public Long updateBill(Bill bill) { return billDao.updateBill(bill); }

    @Override
    public Double getWalletTotal(GetWalletParam getWalletParam) { return billDao.getWalletTotal(getWalletParam); }
}
