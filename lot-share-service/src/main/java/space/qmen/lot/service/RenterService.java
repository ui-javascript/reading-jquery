package space.qmen.lot.service;

import space.qmen.lot.domain.Renter;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface RenterService {

    List<Renter> findAllRenter();

    Renter findRenterById(Long id);
    Long saveRenter(Renter Renter);
    Long updateRenter(Renter Renter);
    Long deleteRenter(Long id);
}
