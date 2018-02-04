package space.qmen.lot.service.impl;

import space.qmen.lot.dao.OwnerDao;
import space.qmen.lot.domain.Owner;
import space.qmen.lot.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class OwnerServiceImpl implements OwnerService {

    @Autowired
    private OwnerDao ownerDao;

    public List<Owner> findAllOwner(){
        return ownerDao.findAllOwner();
    }

    public Owner findOwnerById(Long id) {
        return ownerDao.findById(id);
    }

    @Override
    public Long saveOwner(Owner owner) {
        return ownerDao.saveOwner(owner);
    }

    @Override
    public Long updateOwner(Owner owner) {
        return ownerDao.updateOwner(owner);
    }

    @Override
    public Long deleteOwner(Long id) {
        return ownerDao.deleteOwner(id);
    }

}