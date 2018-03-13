package space.qmen.lot.service.impl;

import space.qmen.lot.dao.RenterDao;
import space.qmen.lot.domain.Renter;
import space.qmen.lot.service.RenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class RenterServiceImpl implements RenterService {

    @Autowired
    private RenterDao renterDao;

    public List<Renter> findAllRenter(){
        return renterDao.findAllRenter();
    }

    public Renter findRenterById(Long id) {
        return renterDao.findById(id);
    }

    @Override
    public Long saveRenter(Renter renter) {
        return renterDao.saveRenter(renter);
    }

    @Override
    public Long updateRenter(Renter renter) {
        return renterDao.updateRenter(renter);
    }

    @Override
    public Long deleteRenter(Long id) {
        return renterDao.deleteRenter(id);
    }

}